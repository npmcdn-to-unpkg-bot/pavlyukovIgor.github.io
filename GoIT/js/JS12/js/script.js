$(function() {
  var html = $('#profile').html();
  var data = {
      profile_name: "Павлюков Игорь",
      profile_photo: "img/avatar.jpg",
      profile_photo_title: "Павлюков",
      profile_education: "Студент курса FrontEnd Online 2",
      profile_dreams: "Хочу учить фронтенд, потому что:",
      profile_dreams_1: "Люблю решать интересные задачи",
      profile_dreams_2: "Буду иметь гибкий график работы",
      profile_dreams_3: "Хочу иметь достойную оплату труда",
      profile_contact: "Мой Skype:",
      profile_contact_address: "uropek.ua",
      profile_fb: "Мой профиль в Facebook",
      profile_fb_link: "https://www.facebook.com/igor.pavlyukov.7",
      profile_fb_link_text: "facebook.com",
      profile_feedback: "Мой фидбек:",
      profile_feedback_text: "Готов обучаться"
  };

  var content = tmpl(html, data);
  $('body').append(content);


});
