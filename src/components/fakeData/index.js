import coxsbazar from './cox'sbazar';
import sundarban from './sundarban';
import sreemongol from './sreemongol';


const  fakedata = [...coxsbazar, ...sundarban, ...sreemongol];

const shuffle = (a) => {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  };
  
  shuffle(fakeData);
  
  export default fakeData;