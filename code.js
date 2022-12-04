const N = prompt("nhap N");
const pointsOfStudents = [];

for (let i = 0; i <= N - 1; i++)
{
	let result = prompt("enter point of student " + (i+1));
  let point = Number(result);
  pointsOfStudents.push(point);
}

let totalNumber = 0, i=-1;
while (++i < pointsOfStudents.length) {
  totalNumber += pointsOfStudents[i];
}
avgPoint = totalNumber / pointsOfStudents.length;

let count = 0;
for (let i = 0; i <= N - 1; i++)
{
  if (pointsOfStudents[i] > 9) {
  	count ++;
 	}
}
console.log(count);

document.write('avgPoint\n', avgPoint);
document.write('count', count);



