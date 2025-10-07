export type Review = {
  user: string; stars: 1|2|3|4|5; text: string; verified?: boolean; photo?: string;
};
export const sampleReviews: Review[] = [
  { user: "Aarav G.", stars: 5, verified: true, text: "Built my village IRL. 10/10 fun!" },
  { user: "Priya R.", stars: 5, verified: true, text: "Best gift for my kid who loves Minecraft." },
  { user: "Nikhil T.", stars: 4, text: "Magnets snap nicely. Would love more biomes!" }
];
