const mineflayer = require("mineflayer");
const bot = mineflayer.createBot({
  host: "sakurapvp.club",
  port: 25565,
  username: "v31a",
});
const login1 = process.env['login']
bot.on("messagestr", (msg) => {
  console.log(msg
  )})
       
bot.once("login", () => {
   console.log("Cargado Correctamente");
   console.log(bot.chat)
    setTimeout(() => {
  bot.setControlState('forward', true);
  setTimeout(() => {
    bot.setControlState('forward', false);
    setTimeout(() => {
      bot.chat("/login " + login1);
    }, 1000);
  }, 5000);
}, 5000);;
});
bot.once("login", () => {
    console.log("Connected players:");
    const players = Object.keys(bot.players);
    players.forEach(player => {
        console.log(player);
    });
});
process.stdin.on("data", function (data) {
  const input = data.toString().trim();
  if (input.startsWith("chat ")) {
    const message = input.slice(5);
    bot.chat(message);
  }
  if (input.startsWith("walk")) {
    bot.setControlState("forward", true);
    setTimeout(() => {
      bot.setControlState("forward", false);
      console.log("Listo crack, ya caminé");
    }, 1000);
  };
  if (input.startsWith("item ")) {
    const inventory = bot.inventory.slots;
    const message = parseInt(input.slice(5));
    const item = inventory[35 + message]; // Assuming the first item is in slot 36
    console.log(item);
    console.log("Ahi está");}
  if (input.startsWith("itempress ")) {
    const inpt = parseInt(input.slice(10));
    bot.setQuickBarSlot(inpt)
    bot.activateItem(0, 0, 0);
    console.log("presionado" + bot.quickBarSlot)
  }
  if (input.startsWith("chestitem ")) {
      const whats = parseInt(input.slice(10));
      const slot = whats;
      const slotc = window.slots[slot];
      const mouseButton = 1;
      const mode= 0;
      bot.clickWindow(slotc.slot, mouseButton, mode);
};
  if (input.startsWith("listplayers ")) {
        console.log("Connected players:");
        const players = Object.keys(bot.players);
        players.forEach(player => {
            console.log(player);
        });
    };
    
});
bot.on("windowOpen", (window) => {
  console.log("Abrió la ventana");
  console.log(window);
      
        const whats = 30;
        const slot = whats;
        const slotc = window.slots[slot];
        const mouseButton = 1;
        const mode= 0;
        bot.clickWindow(slotc.slot, mouseButton, mode);
  });

