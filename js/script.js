var question1 = "What is the temperature today?";
var question2 = "what kind of event is it?";

var tempFahr = prompt(question1);
var eventType = prompt(question2);
var result = 'Since it is ';

if (eventType === "formal" && tempFahr < 54){
  var clothing = "you should wear a suit and coat";
  result = result.concat(tempFahr, ' degrees and you are going to a ', eventType,' event, ', clothing);
  // document.getElementById("demo").innerHTML = result;
  window.alert(result);
  console.log(result);

}else if (eventType === "formal" && tempFahr < 70){
  clothing = "you should wear a suit and a jacket";
  result = result.concat(tempFahr, ' degrees and you are going to a ', eventType,' event, ', clothing);
  window.alert(result);
  console.log(result);

}else if (eventType === "formal" && tempFahr > 70){
  clothing = "you should wear a suit and no jacket";
  result = result.concat(tempFahr, ' degrees and you are going to a ', eventType,' event, ', clothing);
  window.alert(result);
  console.log(result);

}else if (eventType === "casual" && tempFahr < 54){
  clothing = "you should wear something comfy and a coat";
  result = result.concat(tempFahr, ' degrees and you are going to a ', eventType,' event, ', clothing);
  window.alert(result);
  console.log(result);

}else if (eventType === "casual" && tempFahr < 70){
  clothing ="you should wear something comfy and a jacket";
  result = result.concat(tempFahr, ' degrees and you are going to a ', eventType,' event, ', clothing);
  window.alert(result);
  console.log(result);

}else if (eventType === "casual" && tempFahr > 70){
  clothing = "you should wear something comfy and no jacket";
  result = result.concat(tempFahr, ' degrees and you are going to a ', eventType,' event, ', clothing);
  window.alert(result);
  console.log(result);

}else if (eventType === "semi-formal" && tempFahr < 54){
  clothing = "you should wear a polo and a coat";
  result = result.concat(tempFahr, ' degrees and you are going to a ', eventType,' event, ', clothing);
  window.alert(result);
  console.log(result);

}else if (eventType === "semi-formal" && tempFahr < 70){
  clothing ="you should wear a polo and a jacket";
  result = result.concat(tempFahr, ' degrees and you are going to a ', eventType,' event, ', clothing);
  window.alert(result);
  console.log(result);

}else if (eventType === "semi-formal" && tempFahr > 70){
  clothing = "you should wear a polo and no jacket";
  result = result.concat(tempFahr, ' degrees and you are going to a ', eventType,' event, ', clothing);
  window.alert(result);
  console.log(result);
}else {
  window.alert("You get to decide!")
}
