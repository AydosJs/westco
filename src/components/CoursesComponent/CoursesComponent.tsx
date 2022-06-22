import { ICourse } from '../../containers/client/courses/CoursesContainer'

type Props = {
  course: ICourse
}

export default function CoursesComponent({ course }: Props) {
  return (
    <div className="w-full group hover:shadow-lg h-[346px] min-h-[346px] bg-white rounded-lg p-4">
      <div className="">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src={course?.imgUrl && course?.imgUrl !== 'img/img-a463268af6f271bc3adac0871d505b4a.jpg' ? course?.imgUrl : 'https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/P/web/n/z/b/onlinecourses_shutterstock_490891228_2000px_728945.jpg'} alt="content" />
        <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2  line-clamp-1 first-letter:uppercase">
          {course?.name}
        </h2>
        <p className="max-w-[400px] overflow-hidden text-ellipsis leading-relaxed text-base text-gray-600 line-clamp-3">
          {course?.description}
        </p>
      </div>
    </div>
  )
}