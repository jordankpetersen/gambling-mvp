import { Schema, model } from "mongoose";

// In the tournament we decide if we want to include the top scorer or not
const tournamentSchema = new Schema({
  name: { type: String, required: true },
  endDate: {type: String, required: true}, 
  startTime: {type: String, required: true},
  // TopScorerBet determine if the tournament includes the top scorer bet
  topScorerBet: {type: Boolean, required: true},
  // This property is the winner player(who got the most goals in the torunament)
  topScorer: { type: Schema.Types.ObjectId, ref: "Player" },
  teams: [{type: String, required: true}],
  // The players candidates list for the tournament
  players: [{type: Schema.Types.ObjectId, ref: "Player", required: true}],
  winnerTeam: {type: String},
  symbol: {type: String, required: true},
  createdDate: Date.now(),
}, { versionKey: false });

const Tournament = model("Tournament", tournamentSchema);

export default Tournament;
