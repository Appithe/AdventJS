function wrapping(gifts) {
	
	const wrappedGifts = gifts.map((gift) => {
		let wrap = '*'.repeat(gift.length + 2);
		return `${wrap}\n*${gift}*\n${wrap}`;
  });

  return wrappedGifts;
}

const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] 
*/
