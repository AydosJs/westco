import { IBook } from '../../containers/client/librari/LibrariContainer'

type Props = {
  book: IBook
}

export default function BooksItemComponent({ book }: Props) {
  return (
    <div className="w-full group hover:shadow-lg min-h-[346px] bg-white p-4 rounded-lg h-fit">
      <div className="">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src={!book?.imgUrl && book?.imgUrl !== 'img/img-a463268af6f271bc3adac0871d505b4a.jpg' ? book?.imgUrl : 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg'} alt="content" />
        <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2  line-clamp-1 first-letter:uppercase">
          {book?.name}
        </h2>
        <p className="leading-relaxed text-base text-gray-600 line-clamp-3">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
    </div>
  )
}