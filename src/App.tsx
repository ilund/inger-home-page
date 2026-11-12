import { contact } from './content'
// import { education, experience, type Entry } from './content'

// function EntryList({ entries }: { entries: Entry[] }) {
//   return (
//     <ol className="entries">
//       {entries.map((entry, i) => (
//         <li key={i} className="entry">
//           <p className="entry-period">{entry.period}</p>
//           <div>
//             <h3>{entry.title}</h3>
//             <p className="entry-place">{entry.place}</p>
//             {entry.description && <p>{entry.description}</p>}
//           </div>
//         </li>
//       ))}
//     </ol>
//   )
// }

function App() {
  return (
    <main>
      <header className="intro">
        <img
          className="portrait"
          src="/inger.jpg"
          width="640"
          height="480"
          alt={`Portrett av ${contact.name}`}
        />
        <div>
          <h1>{contact.name}</h1>
          <dl className="contact">
            <div>
              <dt>E-post</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Mobil</dt>
              <dd>
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Område</dt>
              <dd>{contact.area}</dd>
            </div>
          </dl>
        </div>
      </header>

      {/*
      <section aria-labelledby="erfaring">
        <h2 id="erfaring">Erfaring</h2>
        <EntryList entries={experience} />
      </section>

      <section aria-labelledby="utdanning">
        <h2 id="utdanning">Utdanning</h2>
        <EntryList entries={education} />
      </section>
      */}
    </main>
  )
}

export default App
