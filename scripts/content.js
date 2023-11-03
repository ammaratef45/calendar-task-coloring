let waitTimeSeconds = 2;

async function main() {
  console.log(`waiting for ${waitTimeSeconds} seconds`);
  await new Promise(resolve => setTimeout(resolve, waitTimeSeconds*1000));
  const events = document.querySelectorAll('div.ynRLnc');
  console.log(`found ${events.length} events`);
  let tasks = [];
  for (let i=0; i< events.length; i++) {
    if(events[i].textContent.startsWith('task')) {
      tasks.push(events[i]);
    }
  }
  console.log(`found ${tasks.length} tasks`);
  for(let i=0; i<tasks.length; i++) {
    color = tasks[i].textContent.split(',')[0].split('[')[1];
    if(color) {
      color = color.replace(']', '');
      if(color == 'pink') {
        color = '#d80ba1';
      }
      console.log(color);
      tasks[i].parentElement.style.backgroundColor = color;
    } else {
      console.log(`no color property set for ${tasks[i].textContent}`);
    }
  }
}

setInterval(main, 500);
