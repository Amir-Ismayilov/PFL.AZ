export default async ({store, route, redirect}) => {
  // Games
  await store.dispatch('module/games/getGamesArray')
  // Clubs
  await store.dispatch('module/clubs/getClubsArray')
  // Polls
  await store.dispatch('module/polls/getPollsArray')
  // News
  await store.dispatch('module/news/getNewsArray')
  // Contacts
  await store.dispatch('module/contacts/getContactsArray')
  // Bombarders
  await store.dispatch('module/bombarders/getBombardersArray')

  // Tours
  // await store.dispatch('module/tours/getToursArray')
}
