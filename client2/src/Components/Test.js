console.log('done')
const quest= [
    {
        question: 'Who invented the first car',
        optionA: 'Henry Ford',
        optionB: 'Micheal Jackson',
        optionC: 'Adewumi Sunkanmi',
        optionD: 'Aristotle Mehe',
        correctAnswer: 'D'
      },
      {
        question: '/images/1.png',
        optionA: '/images/Screenshot (12).png',
        optionB: '/images/Screenshot (17).png',
        optionC: '/images/Screenshot (3).png',
        optionD: '/images/Screenshot (11).png',
        correctAnswer: 'C'
      },
      {
        question: 'Who built the first nation for Gd and also named it after the best day of invented',
        optionA: 'Farao',
        optionB: 'bexties okjo',
        optionC: 'lalala',
        optionD: 'lalalabe',
        correctAnswer: 'B'
      },
      {
        question: 'Who invented the first house',
        optionA: 'Bestie Okjo',
        optionB: 'Micheal Jackson',
        optionC: 'Adewumi Sunkanmi',
        optionD: 'Aristotle Mehe',
        correctAnswer: 'D'
      },
      {
        question: 'Overall Blessing Can be defined as',
        optionA: 'Lovavue on da parez',
        optionB: 'Pelova bedom',
        optionC: 'lalala',
        optionD: 'lalalabe',
        correctAnswer: 'A'
      },
      {
        question: 'sdghsld susgd  comment',
        optionA: 'rerez',
        optionB: 'Micheal Jacksosdsdsdn',
        optionC: 'Locate me in you',
        optionD: 'Aristotle gfini',
        correctAnswer: 'D'
      },
      {
        question: '1 1 1 1 1 for Gd and also named it after the best day of invented',
        optionA: 'Farao',
        optionB: 'bexties okjo',
        optionC: 'lalala',
        optionD: 'lalalabe',
        correctAnswer: 'B'
      },
      {
        question: '2 3 4 5 5 6 Who invented the first house',
        optionA: 'Bestie Okjo',
        optionB: 'Micheal Jackson',
        optionC: 'Adewumi Sunkanmi',
        optionD: 'Aristotle Mehe',
        correctAnswer: 'D'
      },
      {
        question: ' 736 3 5 3 43 43 Overall Blessing Can be defined as',
        optionA: 'Lovavue on da parez',
        optionB: 'Pelova bedom',
        optionC: 'lalala',
        optionD: 'lalalabe',
        correctAnswer: 'A'
      },
      {
        question: '/images/4.png',
        optionA: '/images/1A.png',
        optionB: '/images/1b.png',
        optionC: '/images/1c.png',
        optionD: '/images/1d.png',
        correctAnswer: 'C'
      }
]

function genrand(min , max){
    let arr=[]
    function random_number(min,max){
      const random_num= Math.floor(Math.random() * (max+1-min));
      return random_num
    }
    for(var i=1;i<max+1; i++){
        arr.splice(random_number(min, max) , 0, i)}
    return arr;
   }
   

let iii =genrand(1,quest.length)
let newArr= []
for(let j =0;j<iii.length;j++ ){
newArr.push(quest[iii[j]-1])
}
console.log(newArr)