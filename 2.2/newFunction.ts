export function myFunction(myNum: number): string {
    if (myNum == 5) {

        return 'true';

    }  else if(myNum > 5) {

        return 'big';

    }else if (myNum < 5 && myNum>=0){

        return "false";

    }else  {
        return "negative";
    }
}





/* 
EN: Add your own function starting on line 20 
!Write a function that returns a movie when the user inputs movieOne - movieFive
!The movies are up to you use the 'writeIfElseStatment' example from class for help 
!Add expects to the test checking to make sure you are getting back the correct movie.
*/

export function blockBuster(movie: string): string {
    if(movie  == "movieOne"){
        return "Spiderman";

    }else if(movie == "movieTwo"){
        return "Batman";

    }else if(movie =="movieThree" ){
        return "Joker";
    }else if (movie == "movieFour"){
        return "Avengers";
    }else if (movie == "movieFive"){
        return "Starwars";
    }else{
         return "No movie";
    }
}