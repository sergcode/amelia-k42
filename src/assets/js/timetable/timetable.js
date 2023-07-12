// let dateObj = new Date();
// let nowHours = dateObj.getHours();
// let nowMinutes = dateObj.getMinutes();
// let nowTime = nowHours +":"+ nowMinutes;
let timetable = document.getElementsByClassName("timetable__list")[0].getElementsByTagName('li');

// console.log(timetable);

for (let i = 0; i < timetable.length; i++ ) {
  console.log(timetable[i]);
}


// timetable.each(function () {
//   let elemIndex = $(this).index();
//   switch (nowTime) {
//     case 7 +":"+ 0:
//       $(".timetable__list li:nth-child(1)").addClass('active');
//       break;
//     case 10 +":"+ 0:
//       $(".timetable__list li:nth-child(2)").addClass('active');
//       break;
//     case 11 +":"+ 0:
//       $(".timetable__list li:nth-child(3)").addClass('active');
//       break;
//     case 13 +":"+ 0:
//       $(".timetable__list li:nth-child(4)").addClass('active');
//       break;
//     case 14 +":"+ 0:
//       $(".timetable__list li:nth-child(5)").addClass('active');
//       break;
//     case 15 +":"+ 0:
//       $(".timetable__list li:nth-child(6)").addClass('active');
//       break;
//     case 16 +":"+ 30:
//       $(".timetable__list li:nth-child(7)").addClass('active');
//       break;
//     case 17 +":"+ 0:
//       $(".timetable__list li:nth-child(8)").addClass('active');
//       break;
//     case 18 +":"+ 0:
//       $(".timetable__list li:nth-child(9)").addClass('active');
//       break;
//     case 19 +":"+ 0:
//       $(".timetable__list li:nth-child(10)").addClass('active');
//       break;
//     case 20 +":"+ 0:
//       $(".timetable__list li:nth-child(11)").addClass('active');
//       break;
//     case 22 +":"+ 0:
//       $(".timetable__list li:nth-child(12)").addClass('active');
//       break;
//     case 23 +":"+ 0:
//       $(".timetable__list li:nth-child(13)").addClass('active');
//       break;
//   }
//   console.log(elemIndex)
// });





// function time() {
//   var dateObj = new Date();
//   var nowHours = dateObj.getHours();
//   var nowMinutes = dateObj.getMinutes();
//   var nowTime = nowHours +":"+ nowMinutes;
//   var $timetable = $(".timetable__list li");
//
//   console.log(nowTime);
//
//   // let listTime =
//
//
//   // setInterval(function () {
//   //   $timetable.each(function () {
//   //
//   //     if($(this).hasClass('active')) {
//   //       let elemIndex = $(this).index();
//   //       $(this).removeClass('active');
//   //       if(elemIndex!==12) {
//   //
//   //
//   //         if(nowTime >= 23 +":"+ 0 && nowTime < 7 +":"+ 0) {
//   //           $timetable.eq(elemIndex+1).addClass('active');
//   //         }
//   //
//   //
//   //       }
//   //
//   //       console.log(elemIndex);
//   //
//   //       return false;
//   //     }
//   //
//   //   });
//   // },1000);
//
//
//
//   // $timetable.each(function () {
//   //   var elemIndex = $(this).index();
//   //
//   //   if(elemIndex!== 12) {
//   //     if(nowTime > 22 +":"+ 59) {
//   //       $timetable.eq(elemIndex+1).addClass('active');
//   //     }
//   //   }
//   //   console.log(elemIndex);
//   //
//   // });
//
//   // var tt = 23 +":"+ 0;
//   // console.log(dateObj);
//
//
//
//
//
//   // $timetable.each(function () {
//   //
//   //   if(nowTime >= 0 +":"+ 0 && nowTime < 7 +":"+ 0) {
//   //     $(this).addClass('active');
//   //   } else {
//   //     $(this).removeClass('active');
//   //   }
//   //
//   // });
//
//
//
//
//
//
//
//
//
//   // $timetable.eq(elemIndex+1).addClass('active');
//
//
// }
// $(document).ready(function () {
//   time();
// });