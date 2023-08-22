export default async ({store, route, redirect}) => {
  // Games
  await store.dispatch('module/games/getGamesArray')
  // Clubs
  await store.dispatch('module/clubs/getClubsArray')
  // Polls
  await store.dispatch('module/polls/getPollsArray')


}
