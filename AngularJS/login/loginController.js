var app= angular.module("postserviceapp",[]);

app.controller("loginCtrl",function($scope,$http){
    $scope.email=null;
    $scope.password=null;

    $scope.postdata=function(email, password){
        var data={
            email:email,
            password:password
        }
        //call the service
        $http.post("https://localhost:44327/api/User/Login",JSON.stringify(data))
        .then(function(response){
            console.log(response);

            if(response.data){
                $scope.msg="Post Data Submitted";

                $scope.email=response.data.email;
                $scope.password=response.data.password;
            }
        },function(error){
            console.log(error)
        })
    };
})