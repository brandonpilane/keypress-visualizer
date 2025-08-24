// Read the keypresses from the keyboard and return an array oƒ keypresses
export function readKeypresses(keypresses, event) {
  if (keypresses.length > 10) {
    keypresses.shift();
  }

  //  spacebar is a special case
  if (event.key === ' ') {
    keypresses.push('Space');
    return keypresses;
  }

  keypresses.push(event.key);
  return keypresses;
}
