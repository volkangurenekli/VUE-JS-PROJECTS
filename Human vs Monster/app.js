new Vue({
  el: "#app",
  data: { player_heal: 100, monster_heal: 100, game_is_on: false, logs: [] },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      let point = Math.ceil(Math.random() * 10);
      this.monster_heal -= point;
      console.log("player_heal", this.player_heal);
      this.add_to_log({ turn: "player-turn", text: `PLAYER ATTACK ${point}` });
      this.monster_attack();
    },

    special_attack: function () {
      let point = Math.ceil(Math.random() * 25);
      this.monster_heal -= point;
      this.add_to_log({
        turn: "player-turn",
        text: `SPECIAL PLAYER ATTACK ${point}`,
      });
      this.monster_attack();
    },

    heal_up: function () {
      let point = Math.ceil(Math.random() * 20);
      this.player_heal += point;
      this.add_to_log({ turn: "player-turn", text: `PLAYER HEAL UP ${point}` });
      this.monster_attack();
    },

    give_up: function () {
      this.player_heal = 0;
      this.add_to_log({ turn: "player-turn", text: `PLAYER GIVE UP` });
    },

    monster_attack: function () {
      let point = Math.ceil(Math.random() * 15);
      this.player_heal -= point;
      this.add_to_log({
        turn: "monster-turn",
        text: `MONSTER ATTACK ${point}`,
      });
    },

    add_to_log: function (log) {
      this.logs.push(log);
    },
  },

  watch: {
    player_heal: function (value) {
      if (value <= 0) {
        this.player_heal = 0;
        if (confirm("GAME OVER. Do you want to play again ?")) {
          this.player_heal = 100;
          this.monster_heal = 100;
          this.logs = [];
        }
      } else if (value > 100) {
        this.player_heal = 100;
      }
    },
    monster_heal: function (value) {
      if (value <= 0) {
        this.monster_heal = 0;
        if (confirm("YOU WIN. Do you want to play again ?")) {
          this.player_heal = 100;
          this.monster_heal = 100;
          this.logs = [];
        }
      }
    },
  },
});
