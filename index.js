var counter = 0;

$(document).ready(function(){
    $("#current_semester").hide();
    $("#course_selector").hide();
    $("#course_1").hide();
    $("#course_2").hide();
    $("#course_3").hide();
    $("#course_4").hide();
    $("#course_5").hide();
    $("#course_6").hide();
    $("#calculate_btn").hide();
});

$("#next_btn").click(function(){
    counter++;
    if(counter == 1){
        $("#previous_semester").hide();
        $("#current_semester").show();
        $("#course_selector").show();
    } else if(counter == 2){
        $("#course_selector").hide();

        if($("#current_sem_course").val() == 2){
            $("#course_1").hide();
            $("#course_2").hide();
            $("#course_3").hide();
            $("#course_4").hide();
            $("#course_5").hide();
            $("#course_6").hide();
            
        } else if($("#current_sem_course").val() == 3){

        }else if($("#current_sem_course").val() == 4){

        }else if($("#current_sem_course").val() == 5){

        }else if($("#current_sem_course").val() == 6){

        }
    }
});