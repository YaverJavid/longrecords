let poetry = []


const pages = [
  `The heavy bandwagon with trumpet lead,
Taken down the street by one finest steed.
The loud blare, blast, or fanfare—
Call it a toot amidst the drum snare.
As past it goes, the silent it goes;
Then I am alone with my quiet and woes.
Some past sorrows, some future fears,
Half— unexplained gloom without tears.
Someday, when the bandwagon’ s sounds dim,
It’s flowers, perfume, and rhythm.
The joy of today and tomorrow’s toy
Exists— even the unexplained joy.`,
  `Until my land isn't free how can i be at peace?
A high ache strikes my heart without any ease
Everytime I imagine my own life's dream
I realise I am an exiled man overseas
Simply put, we are at our enimie's mercy
Or you can ev'r drown in invented Leagalese
Sorrounded by natures strong hues, yet sits
in wait in our hearts: the red banner on a cotton peice
If the enemy were to take something ours
It will pace far away like a wild bird at release
My culture, my dreams, and my nation are at stake
They far excel for each of us beyond your offered two rupees`,
  `Sitting on a bank for the odd month’s save,
In midst of nature’s own musical octave.
Drip by drip, the opera moves towards the end—
Enough for one to be a pilgrim, and one to be a knave.
No infinite music in this world of six directions;
It has no ability to bereave, no ability to waive.
Blooming steppe’s red poppy amidst the blue towers—
Isn’t it perfect for man’s short reprieve?
Is the gloom in the blue-bloom days nostalgia,
Or is it the three-lived man’s ancient crave?
Very thick is the static man’s sheath;
Of no use is the strong man’s heave.
Wild tulips from the very soil I grew from
Like the day of gloom and the Eid day's eve.`
]

for (let i = 0; i < pages.length; i++) {
  let poem = {
    couplets: [
      []
    ]
  }
  
  let lines = pages[i].split("\n")
  for (let j = 0; j < lines.length; j++) {
    if (poem.couplets[poem.couplets.length - 1].length == 2) {
      poem.couplets.push([])
    }
    poem.couplets[poem.couplets.length - 1].push(lines[j])
  }
  
  
  poetry.unshift(poem)
}