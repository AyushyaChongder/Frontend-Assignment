$(document).ready(function(){
  // Function to load project info content dynamically
  function loadProjectInfoContent() {
      // You can use AJAX to load the content from projectInfo.html or any other source
      // For demonstration purposes, let's just show a simple message here
      $('#projectInfo').html('<p>Project Info content goes here...</p>');
  }

  // When clicking on the Project Info button, load the content and highlight the button
  $('#projectInfo-tab').on('click', function (e) {
      $('#manageAccess-tab').removeClass('active');
      $(this).addClass('active');
      loadProjectInfoContent();
  });

  // When clicking on the Manage Access button, load the content and highlight the button
  $('#manageAccess-tab').on('click', function (e) {
      $('#projectInfo-tab').removeClass('active');
      $(this).addClass('active');
      // Here you can load the content for Manage Access tab if needed
  });

  // Triggering click event for the Project Info button to load content initially
  $('#projectInfo-tab').trigger('click');
});
