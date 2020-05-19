'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quotes', [
      {
        quote: `"When we are saying this cannot be accomplished '
                'this cannot be done, then we are short-changing ourselves.
                'My brain, it cannot process failure. It will not process failure.  
                'Because if I have to sit there and face myself and tell myself you are a failure,
                'I think that is almost worse than dying."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"If you're afraid to fail, then you're probably going to fail."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"Pain doesn't tell you when you ought to stop. Pain is the little voice in your head
                 that tries to hold you back because it knows if you continue you will change. Don't 
                 let it stop you from being who you can be. Exhaustion tells you when you ought to stop. 
                 You only reach your limit when you can go no further."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"I have self-doubt. I have insecurity. I have fear of failure. I have nights when I show up 
                at the arena and I'm like, 'My back hurts, my feet hurt, my knees hurt. I don't have it. I 
                just want to chill.' We all have self-doubt. You don't deny it, but you also don't capitulate 
                to it. You embrace it."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"There's a choice that we have to make as people, as individuals. If you want to be great at 
                something, there's a choice you have to make. We all can be masters at our craft, but you have 
                to make a choice. What I mean by that is, there are inherent sacrifices that come along with that. 
                Family time, hanging out with friends, being a great friend, being a great son, nephew, whatever 
                the case may be. There are sacrifices that come along with making that decision."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"Learn to love the hate. Embrace it. Enjoy it. You earned it. Everyone is entitled to their own 
                opinion and everyone should have one about you. Haters are a good problem to have. Nobody hates 
                the good ones. They hate the great ones.”`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"I saw you come in and I wanted you to know that it doesn't matter how hard you work, that I'm 
                willing to work harder than you."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"I never looked at [basketball] as work. I didn't realize it was work until my first year in the 
                NBA. When I came around, I was surrounded by other professionals and I thought basketball was 
                going to be everything to them and it wasn't. And I was like, 'This is different.' I thought 
                everybody was so obsessive about the game like me. It was like, no? Oh, that's hard work. I get 
                it now."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't 
                want to understand you."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"Losers visualize the penalties of failure. Winners visualize the rewards of success."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        quote: `"Leadership is lonely ... I'm not going to be afraid of confrontation to get us to where we need 
                to go. There's a big misconception where people thinking winning or success comes from everybody 
                putting their arms around each other and singing kumbaya and patting them on the back when they 
                mess up, and that's just not reality. If you are going to be a leader, you are not going to please 
                everybody. You have to hold people accountable. Even if you have that moment of being uncomfortable."`,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};