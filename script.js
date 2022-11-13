"use strict";

let current = 1;
// 
$(document).ready(function () {
    $(".input-age").on('keyup keydown mousewheel', function () {
        if (this.value >= 18 && this.value <= 25) {
            $(".Age").addClass("d-block");
        } else {
            $(".Age").removeClass("d-block");
        };
    })
    //  

    $('.ressource-label-container').each(function () {
        let click = true;
        $(this).find('.opener').click(function () {
            $(this).siblings('div').toggle();
            if (click) {
                $(this).text('Montant fixe perçu chaque mois');
                click = false;
            } else {
                $(this).text('détaillez les montants sur les 12 derniers mois');
                click = true;
            }
        });
    })

    // 


    // -------------------------------------------- --------------------------------------------  //
    $('.back-button').click(function () {
        $('#dashboard').show();
    })
    $('.mobile_step_1').click(function () {
        current = 1;
        nextStep();
        $('#dashboard').hide();
    });
    $('.mobile_step_2').click(function () {
        current = 1;
        nextStep();
        $('#dashboard').hide();
    });
    $('.mobile_step_3').click(function () {
        current = 5;
        nextStep();
        $('#dashboard').hide();
    });
    $('.mobile_step_4').click(function () {
        current = 10;
        nextStep();
        $('#dashboard').hide();
    });
    $('.mobile_step_5').click(function () {
        current = 11;
        nextStep();
        $('#dashboard').hide();
    });
    $('.mobile_step_6').click(function () {
        current = 17;
        nextStep();
        $('#dashboard').hide();
    });

    const nextStep = () => {
        let step = `currentStep${current}`;
        $('#currentStep1,#currentStep2,#currentStep3,#currentStep4,#currentStep5,#currentStep6,#currentStep7,#currentStep8,#currentStep9,#currentStep10,#currentStep11,#currentStep12,#currentStep1,#currentStep13,#currentStep14,#currentStep15,#currentStep16,#currentStep17,#currentStep18,#currentStep19,#currentStep20,#currentStep21,#currentStep22').hide();

        // 
        let completedSteps = $('.completed').length;
        $('.progress-indication').html(`${completedSteps} / 6 complétés`);

        $('.progression').css('width', `${(completedSteps / 6) * 100}%`);
        // 
        switch (step) {
            case "currentStep1":
                $('#currentStep1').show();
                break;
            case "currentStep2":
                $('.step_count').html('2/4')
                $('#currentStep2').show();
                break;
            case "currentStep3":
                $('.step_count').html('3/4')
                $('#currentStep3').show();
                break;
            case "currentStep4":
                $('.step_count').html('4/4')
                $('#currentStep4').show();
                $('.step-box-1').addClass('completed');
                $('.step-box-2').addClass('completed');
                break;
            case "currentStep5":

                if ($(window).width() <= 800) {
                    $('#dashboard').show();
                }

                $('.step-header.step2').addClass('active');
                $('.step-header.step3').addClass('active');
                $('.ng-binding-para').html('Votre conjoint -')
                $('.step_count').html('1/5')
                $('#currentStep5').show();
                break;
            case "currentStep6":
                $('.step_count').html('2/5')
                $('#currentStep6').show();
                break;
            case "currentStep7":
                $('.step_count').html('3/5')
                $('#currentStep7').show();
                break;
            case "currentStep8":
                $('.step_count').html('4/5')
                $('#currentStep8').show();
                break;
            case "currentStep9":
                $('.step_count').html('5/5')
                $('#currentStep9').show();
                $('.step-box-3').addClass('completed');
                break;
            case "currentStep10":
                if ($(window).width() <= 800) {
                    $('#dashboard').show();
                }
                $('.step-header.step4').addClass('active');
                $('.ng-binding-para').html('Mon logement -')
                $('.step_count').html('1/1')
                $('#currentStep10').show();
                break;
            case "currentStep11":

                $('.step-box-4').addClass('completed');
                if ($(window).width() <= 800) {
                    $('#dashboard').show();
                }
                $('.step-header.step5').addClass('active');
                $('.ng-binding-para').html('Mes ressources - ')
                $('.step_count').html('1/6')
                $('#currentStep11').show();
                break;
            case "currentStep12":
                $('.step_count').html('2/6')
                $('#currentStep12').show();
                break;
            case "currentStep13":
                $('.step_count').html('3/6')
                $('#currentStep13').show();
                break;
            case "currentStep14":
                $('.step_count').html('4/6')
                $('#currentStep14').show();
                break;
            case "currentStep15":
                $('.step_count').html('5/6')
                $('#currentStep15').show();
                break;
            case "currentStep16":
                $('.step_count').html('6/6')
                $('#currentStep16').show();
                $('.step-box-5').addClass('completed');
                break;
            case "currentStep17":
                if ($(window).width() <= 800) {
                    $('#dashboard').show();
                }
                $('.step-header.step6').addClass('active');
                $('.ng-binding-para').html('Avant de terminer -')
                $('.step_count').html('1/6')
                $('#currentStep17').show();
                break;
            case "currentStep18":
                $('.step_count').html('2/6')
                $('#currentStep18').show();
                break;
            case "currentStep19":
                $('.step_count').html('3/6')
                $('#currentStep19').show();
                break;
            case "currentStep20":
                $('.step_count').html('4/6')
                $('#currentStep20').show();
                break;
            case "currentStep21":
                $('.step_count').html('5/6')
                $('#currentStep21').show();
                break;
            case "currentStep22":
                $('.step_count').html('6/6')
                $('#currentStep22').show();
                $('.step-box-6').addClass('completed');
                break;

            default:
                if ($(window).width() <= 800) {
                    $('#dashboard').show();
                } else {
                    alert('All Steps Completed.');   // 
                }
                break;
        }
    }

    nextStep();

    $('.postalCodeCheck').keyup(function () {
        console.log('Checking for postal code')
        if (this.value >= 10000) {
            $('.ville').show();
        } else {
            $('.ville').hide();
        }
    });

    $('.jumpToHomeStep').click(function () {
        current = 9;
        $('.step-box-3').addClass('completed');
    })
    $('.followSteps').click(function () {
        current = 5;
    })

    $('.validate-button').click(function () {
        current = current + 1;

        // 
        if (current == 3 || current == 4) {
            let hh = `${$('#checkBox_1').children('.situation-label').children('p').text()} </> Boursier échelon ${$('#checkBox_1').children('input').val()}`;
            let ha = `${$('#checkBox_4').children('.situation-label').children('p').text()} </> ${$('#checkBox_4').find('input').val()}`;
            let hs = `${$('#checkBox_2').children('.situation-label').children('p').text()} </> Plus de ${Math.floor(($('#checkBox_2').children('input').val() / 9) * 100) + '%'}`;

            $('.val-checkBox_1').val(hh);
            $('.val-checkBox_4').val(ha);
            $('.val-checkBox_2').val(hs);
        } else { }
        if (current == 10) {
            let exJob = '';
            $('.disability-rate').children('.custom-switch').find('input').each(function () { this.checked ? exJob = this.value : '' });
            let h = `Ex - Est-il boursier de l’enseignement supérieur ? </> Boursier échelon ${$('.education').children('input').val()}`;
            let a = `Ex - Quand s'est terminé son dernier contrat de travail ? </> ${$('.contract-end').find('input').val()}`;
            let s = `Ex - Son taux d’incapacité </> ${Math.floor(($('.disability-rate').children('input').val() / 10) * 100) + '%'} <br> A-t-il une restriction substantielle et durable d'accès à l'emploi reconnue par la CDAPH ? ${exJob}`;

            $('.val_checkbox_4').val(h);
            $('.val_checkbox_5').val(a);
            $('.val_checkbox_6').val(s);

        } else { }

        nextStep();
        userValues();

        // Boursier échelon
    })


    //  
    var userData = []
    function userValues() {
        var userAge = `<div class='fun'> <strong>Âge ;</strong><span> : ${$('.input-age').val()}</span></div>`;
        userData.includes(userAge) ? '' : userData.push(userAge);

        $('.checkBox').each(function () {
            if (this.checked) {
                var userDataCheck = `<div class='fun'><strong>${$(this).parents().siblings().children('p').text()}  </strong><span>: ${this.value}</span> </div>`;
                userData.includes(userDataCheck) ? '' : userData.push(userDataCheck);
            }
        })

        if (current >= 11) {

            let houseSituation = `<div class='fun'><strong>${$('.house-situation').text()}</strong></div>`;
            userData.includes(houseSituation) ? '' : userData.push(houseSituation);

            $('.checkBox_1').each(function () {
                if (this.checked) {
                    let userDataCheck = `<div class='fun'><strong>${$(this).parents('.postal').children('.situation-label').children('p').text()}  </strong><span>: ${this.value}</span> </div>`;
                    userData.includes(userDataCheck) ? '' : userData.push(userDataCheck);
                }
            })

            let postalCode = `<div class='fun'><strong>Code Postal</strong><span>: ${$('.postalCodeCheck').val()}</span></div>`;
            userData.includes(postalCode) ? '' : userData.push(postalCode);

            let town = `<div class='fun'><strong>Ville</strong><span>: ${$('.ville-selected').text()}</span></div>`;
            userData.includes(town) ? '' : userData.push(town);
            
            // 

        }

        $('.secondCheckBox').each(function () {
            if (this.checked) {
                let secondUserDataCheck = `<div class='fun'><strong>${this.value}</strong><span>: ${$(this).parent().siblings('input').val()}</span> </div>`;
                userData.includes(secondUserDataCheck) ? '' : userData.push(secondUserDataCheck);
            }
        })

        if (document.querySelector('.dependent_child').checked) {
            var dependent_child = `<div class='fun'> <strong>Nombre d'enfant(s) à charge </strong><span> : ${$('.dependent_child').val()}</span></div>`;
            userData.includes(dependent_child) ? '' : userData.push(dependent_child);
        } else { }

        if (document.querySelector('.en_couple').checked && current >= 7) {
            var coupleAge = `<div class='fun'> <strong>Couple Âge ;</strong><span> : ${$('.input-coupleAge').val()}</span></div>`;
            userData.includes(coupleAge) ? '' : userData.push(coupleAge);

            // Nationality 

            $('.thirdCheckBox').each(function () {
                if (this.checked) {
                    var exNatioanailty = `<div class='fun'><strong>Ex - ${$(this).parents().siblings('h1').text()}  </strong><span>: ${this.value}</span> </div>`;
                    userData.includes(exNatioanailty) ? '' : userData.push(exNatioanailty);
                }
            })

            // Marital status

            if (current == 9) {
                var maritalStatus = `<div class='fun'><strong> Quel est le statut de votre couple ?</strong><span>: ${$('.selected').text()}</span> </div>`
                userData.includes(maritalStatus) ? '' : userData.push(maritalStatus);
            } else { }

            //

        }

        function update(e) {
            var detailArry = [];
            $(e).find('.label_detail').each(function () {

                $(this).parent().siblings('div').find('input[type = number]').each(function () {
                    var dd = `${e} --- ${  $(this).siblings('label').text()} = ${$(this).val()} <br>`;
                    detailArry.includes(dd) ? '' : detailArry.push(dd);
                })
                $(this).parent().siblings('div').find('input[type = radio]').each(function () {
                    if(this.checked) {
                    var ds = `${e} --- ${$(this).parents('.fw-check-radios').siblings().text()} = ${$(this).val()} <br>`;
                    detailArry.includes(ds) ? '' : detailArry.push(ds);
                    }
                    console.log(ds);
                })

                let detail = `<div class='fun'><strong> ${$(this).text()}  </strong><span>: ${detailArry}</span> </div>`;

                
                userData.includes(detail) ? '' : userData.push(detail);  
            })
        }

        function heading(e){
            let heading =`<div><h4>${$(e).parents('.postal').children('.situation-label').children('p').text()}</h4></div>`
            userData.includes(heading) ? '' : userData.push(heading);
        }


        if (document.querySelector('.resource_1').checked) {
            heading('.resource_1');
            update('.income-from-work');
        }

        if (document.querySelector('.resource_2').checked) { 
            heading('.resource_2');
            update('.professionnel_income');
        }

        if (document.querySelector('.resource_3').checked) {
            heading('.resource_3');
            update('.receive_allowances');
        }

        if (document.querySelector('.resource_4').checked) {
            heading('.resource_4');
            update('.compensation');
        }

        if (document.querySelector('.resource_5').checked) {
            heading('.resource_5');
            update('.pension_div');
        }

        if (document.querySelector('.resource_6').checked) {
            heading('.resource_6');
            update('.inheritance');
        }

        if (document.querySelector('.resource_7').checked) {
            heading('.resource_7');
            update('.resources');
        }

        if (document.querySelector('.resource_8').checked) {
            heading('.resource_8');
            update('.spouse_paid_child');
        }

        // Last Steps

        $('.last_checkBox').each(function () { 
            if(this.checked) {
                var last = `<div class='fun'><strong>${$(this).parents('.stop').find('.question-label')}</strong><span>: ${this.val()}</span></div>`;
                userData.includes(last) ? '' : userData.push(last);
            }
         })


        $('.Users_Value').html(userData);

    }



    // 
})