angular.module('adventApp', [])
  .controller('CalendarCtrl', ['$scope', loadCalendar])

function loadCalendar ($scope) {
  $scope.apiList = [
      {
        api: 'Meetup',
        description: 'Extend your community',
        url: 'https://api.meetup.com',
        showNumber: false
      },
      {
        api: 'Youtube',
        description: 'Video',
        url: 'https://developers.google.com/youtube/v3/docs/',
        showNumber: false
      },
      {
        api: 'Google Maps',
        description: 'Mapping',
        url: 'https://developers.google.com/maps/',
        showNumber: false
      },
      {
        api: 'Twilio',
        description: 'Phone',
        url: 'https://www.twilio.com/api',
        showNumber: false
      },
      {
        api: 'GitHub',
        description: 'Version Control',
        url: 'https://developer.github.com/v3/',
        showNumber: false
      },
      {
        api: 'Braintree',
        description: 'Payments',
        url: 'https://developers.braintreepayments.com/',
        showNumber: false
      },
      {
        api: 'Amazon Product Advertising',
        description: 'Affiliate Marketing',
        url: 'https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html',
        showNumber: false
      },
      {
        api: 'SendGrid',
        description: 'Email',
        url: 'https://sendgrid.com/docs/Integrate/libraries.html',
        showNumber: false
      },
      {
        api: 'Sabre',
        description: 'Travel',
        url: 'https://developer.sabre.com',
        showNumber: false
      },
      {
        api: 'Dropbox',
        description: 'File storage',
        url: 'https://www.dropbox.com/developers',
        showNumber: false
      },
      {
        api: 'FitBit',
        description: 'Fitness',
        url: 'https://dev.fitbit.com/',
        showNumber: false
      },
      {
        api: 'Twitter',
        description: 'Microblogging',
        url: 'https://dev.twitter.com/overview/documentation',
        showNumber: false
      }
    ]
  $scope.daysOfAdvent = [];
  $scope.selectedDay = null;
  $scope.toggleDay = function (idx){
    var specificDay = $scope.apiList[idx];
    specificDay['showNumber'] = !specificDay['showNumber'];
    $scope.selectedDay = idx + 1;
  };
}