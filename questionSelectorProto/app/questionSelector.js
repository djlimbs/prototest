// Kick off Ember
App = Ember.Application.create({
    rootElement: '#application'
});

App.QuestionSelectorView = Ember.View.extend({
    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
            Ember.run.later(this, function() {   
                console.log('gls');
                //$('#mobileMainView').css('max-width', window.innerWidth + 'px');
                if (window.innerHeight < 65) {
                    $('#mobileCardView').show();
                } else {
                    $('#mobileMainView').show();

                    if (navigator.userAgent.match(/iPhone/i)
                        || navigator.userAgent.match(/iPad/i)
                        || navigator.userAgent.match(/iPod/i)) {
                        $('#mobileMainView').css({
                                            'max-height' : window.innerHeight,
                                            'overflow-y' : 'scroll',
                                            '-webkit-overflow-scrolling' : 'touch'
                                        });
                    }
                                        
                }
            }, 500);
        });
    }
});

App.QuestionView = Ember.View.extend({
    templateName: 'question',
    classNames: 'list-group__item expandable-item has-icon--right table--fixed block dots'.w(),
    classNameBindings: ['open'],
    open: false,
    tagName: 'li',
    click: function(e) {
        if (e.target.type !== 'checkbox') {
            //this.get('controller').send('clickShowAnswers');
            this.toggleProperty('open');
            /*Ember.run.later(this, function() {
                $('#' + this.get('elementId')).blur();
            }, 500);*/
        }
    }
});

App.QuestionSelectorController = Ember.ObjectController.extend({
    finalSelectedQuestionIds: [],
    finalDeselectedQuestionIds: [],
    selectedQuestionIds: function() {
        return this.get('selectedQuestions').getEach('Id');
    }.property('positions'),
    hasQuestions: function() {
        var selectedQuestionIds = this.get('selectedQuestionIds');
        var allPositionQuestionIds = [];

        this.get('positions').getEach('Form_Elements__r').forEach(function(fe) {
            if (!Ember.isNone(fe)) {
                allPositionQuestionIds = allPositionQuestionIds.concat(fe.records.getEach('Id'));
            }
        });
        
        var questionsLeftToSelect = allPositionQuestionIds.reject(function(qId) {
            return selectedQuestionIds.indexOf(qId) !== -1;
        });

        return questionsLeftToSelect.length > 0;
    }.property('positions'),
    actions: {
        clickSave: function() {
            this.set('isLoading', true);
            var saveObj = {
                finalSelectedQuestionIds: this.get('finalSelectedQuestionIds'),
                finalDeselectedQuestionIds: this.get('finalDeselectedQuestionIds')
            };

            cont.saveFinalSelectionsForReq(JSON.stringify(saveObj), requisitionId, function(res, resObj) {
                if (res) {
                    var parsedResult = parseResult(res);

                    if (!Ember.isEmpty(parsedResult.errorMessages)) {
                        self.set('error', parsedResult.errorMessages[0]);
                        //reject(self);
                    } else {
                        sforce.one.back();
                        console.log(parsedResult);
                    }
                } else {
                    self.set('error', resObj.message);
                    //reject(self);
                }
            });
        }
    }
});

App.PositionController = Ember.ObjectController.extend({
    questions: function() {
        var selectedQuestionsSources = this.get('parentController').get('selectedQuestions').getEach('Source_Form_Element__c');
        var selectedQuestionIds = this.get('parentController').get('selectedQuestionIds');

        if (!Ember.isEmpty(this.get('Form_Elements__r'))) {
            return this.get('Form_Elements__r').records.reject(function(fe) {
                return selectedQuestionIds.indexOf(fe.Id) !== -1 || selectedQuestionsSources.indexOf(fe.Id) !== -1;
            });
        }
    }.property('Form_Elements__r')
});

App.QuestionController = Ember.ObjectController.extend({
    needs: ['questionSelector'],
    finalSelectedQuestionIdsBinding: 'controllers.questionSelector.finalSelectedQuestionIds',
    finalDeselectedQuestionIdsBinding: 'controllers.questionSelector.finalDeselectedQuestionIds',
    showAnswers: false,
    answers: function() {
        var answerChoices = this.get('Answer_Choices__r');
        if (!Ember.isEmpty(answerChoices)) {
            return answerChoices.records;
        }
    }.property('Answer_Choices__r'),
    isRadioButton: Ember.computed.equal('Answer_Type__c', 'Radio Buttons'),
    questionPartial: function() {
        console.log(this.get('Answer_Type__c'));
        return this.get('Answer_Type__c').camelize();
    }.property('Answer_Type__c'),
    questionSelectionDidChange: function() {
        var questionId = this.get('Id');
        var finalSelectedQuestionIds = this.get('finalSelectedQuestionIds');
        var finalDeselectedQuestionIds = this.get('finalDeselectedQuestionIds');

        if (this.get('isSelected') === true) {
            finalSelectedQuestionIds.addObject(questionId);
            finalDeselectedQuestionIds.removeObject(questionId)
        } else if (this.get('isSelected') === false) {
            finalSelectedQuestionIds.removeObject(questionId);
            finalDeselectedQuestionIds.addObject(questionId);
        }
    /*    var self = this;
        if (this.get('isSelected') === true) {
            cont.selectQuestionForReq(this.get('Id'), requisitionId, function(res, resObj) {
                if (res) {
                    var parsedResult = parseResult(res);

                    if (!Ember.isEmpty(parsedResult.errorMessages)) {
                        self.set('error', parsedResult.errorMessages[0]);
                        //reject(self);
                    } else {
                        self.set('Id', parsedResult.data.newFe.Id);
                        console.log(parsedResult);
                    }
                } else {
                    self.set('error', resObj.message);
                    //reject(self);
                }
            });
        } else if (this.get('isSelected') === false) {
            cont.removeQuestionFromReq(this.get('Id'), function(res, resObj) {
                if (res) {
                    var parsedResult = parseResult(res);

                    if (!Ember.isEmpty(parsedResult.errorMessages)) {
                        self.set('error', parsedResult.errorMessages[0]);
                        //reject(self);
                    } else {
                        console.log(parsedResult);
                    }
                } else {
                    self.set('error', resObj.message);
                    //reject(self);
                }
            });
        }
        /*cont.selectQuestionForRequisition(this.get('Id'), requisitionId, function(res, resObj) {
            if (res) {
                var parsedResult = parseResult(res);

                if (!Ember.isEmpty(parsedResult.errorMessages)) {
                    self.set('error', parsedResult.errorMessages[0]);
                    //reject(self);
                } else {
                    console.log(parsedResult);
                }
            } else {
                self.set('error', resObj.message);
                //reject(self);
            }
        });*/
    }.observes('isSelected'),
    actions: {
        clickShowAnswers: function() {
            this.toggleProperty('showAnswers');
        }
    }
});

App.AnswerController = Ember.ObjectController.extend({
    scoreIcon: function() {
        var score = this.get('Score__c')
            , disqualify = this.get('Disqualify__c')
            , iconClass = '';

        if (disqualify === true) {
            iconClass = 'juicon-ban text-error';
        } else if (score === 1) {
            iconClass = 'juicon-like text-success';
        } else if (score === -1) {
            iconClass = 'juicon-dislike text-warning';
        }

        return iconClass;
    }.property('Score__c', 'Disqualify__c')
});

// Routes
App.QuestionSelectorRoute = Ember.Route.extend( {
    model: function(params) {
        var returnObj = parsedQuestionSelectorMap;

        returnObj.selectedQuestions.forEach(function(q) {
            q.isSelected = true;
        });

        returnObj.positions.forEach(function(p) {
            p.Form_Elements__r = {
                records: returnObj.positionFormElements.filterBy('Source_Position__c', p.Id)
            };
        });
        console.log(returnObj);
        return returnObj;
    }
});

// Router
App.Router.map(function() {
    this.resource('questionSelector', { path: '/' });
});


// This setting disables the detail routing from showing up in the navbar.
App.Router.reopen( {
    location: 'none'
});