blank.controller('loginCtrl', function ($scope) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.eventSources = [
        {id: "1", title: 'Click for Google', start: new Date(), end: new Date(),color: 'black'},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: true}
    ];

    console.log("Events: ", JSON.stringify($scope.eventSources))
    /* config object */
    $scope.uiConfig = {
        calendar: {
            height: "100%",
            editable: true,
            header: {
                left: '',
                center: 'title',
                right: 'prev,next'
            },
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }
    };
});