import { ICourse } from '../../containers/Courses/CoursesContainer'

type Props = {
  course: ICourse
}

export default function CoursesComponent({ course }: Props) {
  return (
    <div className="w-full group hover:shadow-lg h-[346px] min-h-[346px] bg-white rounded-lg p-4">
      <div className="">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src={!course?.imgUrl ? course?.imgUrl : 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg'} alt="content" />
        <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2  line-clamp-1 first-letter:uppercase">
          {course?.name}
        </h2>
        <p className="leading-relaxed text-base text-gray-600 line-clamp-3">
          {course?.description}
        </p>
      </div>
    </div>
  )
}