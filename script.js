function alertmess() {
    alert("Well done⏰! Remember to copy your work and refresh the screen to start over.");
}

var myApp = angular.module('SimpleModule', []);
myApp.controller('MyController', function ($scope) {
    $scope.title = 'Set Your Goals';
    $scope.submitinput = function (count) {
        alert("Scroll down to enter text 💻 ");
        document.querySelector("#writing")
            .addEventListener("keyup", function countWord() {
                var res = [];
                var str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
                str.map((s) => {
                    var trimStr = s.trim();
                    if (trimStr.length > 0)
                        res.push(trimStr);
                });
                document.querySelector("#show").innerText = res.length;
                var wordcount = res.length;
                var wordcount = res.length;
                if (wordcount > count) {
                    document.getElementById("writing").disabled = true;
                    alertmess();
                }
            });
    };

});
