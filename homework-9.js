import { comments } from './comments.js';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num >= 5);
console.log(filteredNumbers);

const furniture = ['Стол', 'Стул', 'Диван', 'Шкаф'];
const hasSofa = furniture.includes('Диван');
console.log(hasSofa);

function reverseArray(arr) {
  return [...arr].reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedFurniture = reverseArray(furniture);
console.log(reversedNumbers);
console.log(reversedFurniture);

const comEmails = comments.filter((comment) => comment.email.endsWith('.com'));
console.log(comEmails);

const updatedPostIds = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));
console.log(updatedPostIds);

const idAndNames = comments.map(({ id, name }) => ({ id, name }));
console.log(idAndNames);

const validatedComments = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));
console.log(validatedComments);

const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

const emailsMap = comments.map((comment) => comment.email);
console.log(emailsReduce);
console.log(emailsMap);

const emailsStringWithToString = emailsMap.toString();
const emailsStringWithJoin = emailsMap.join(', ');
console.log(emailsStringWithToString);
console.log(emailsStringWithJoin);