document.addEventListener('DOMContentLoaded', function() {

  var signinEle = document.querySelector('button.signin');
  var closeEle = document.querySelector('button.close');
  var modalEle = document.querySelector('div.modal');
  var submitEle = document.querySelector('button.submit');
  var formGetStartedEle = document.querySelector('form.getstarted');
  var withinForm;

  signinEle.addEventListener('click', function() {
    modalEle.style.display = 'block';
  });
  closeEle.addEventListener('click', function() {
    modalEle.style.display = 'none';
  });
  submitEle.addEventListener('click', function() {
    document.querySelector('input#user').classList.add('error');
    document.querySelector('input#pass').classList.add('error');
  });
  formGetStartedEle.addEventListener('click', function(eventObject) {
    var eventTarget = eventObject.target;
    if (eventTarget.classList.contains('error')) {
      eventTarget.classList.remove('error');
    }
  });
  formGetStartedEle.addEventListener('pointerout', function() {
    withinForm = false;
  });
  formGetStartedEle.addEventListener('pointerover', function() {
    withinForm = true;
  });
  modalEle.addEventListener('click', function() {
    if (!withinForm) {
      modalEle.style.display = 'none';
    }
  });
});
