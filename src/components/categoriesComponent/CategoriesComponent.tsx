import { ICategorie } from '../../containers/client/categories/CategoriesContainer'
import { ICourse } from '../../containers/client/courses/CoursesContainer'

type Props = {
  categorie: ICategorie
}

export default function CategoriesComponent({ categorie }: Props) {
  return (
    <div className="p-2 w-full bg-white rounded-lg hover:shadow-lg">
      <div className="h-full flex items-center  p-4 ">
        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium line-clamp-1 first-letter:uppercase">
            {categorie?.name}
          </h2>
          <p className="text-gray-500">
            Number of books:
            <span className='font-medium'>&nbsp;{categorie?.books?.length}</span>
          </p>
        </div>
      </div>
    </div>
  )
}