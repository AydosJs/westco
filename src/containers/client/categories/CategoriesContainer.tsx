import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../../api/librariApi";
import { AuthContext } from "../../../providers/AuthProvider";
import LoaderContainer from "../../loader/LoaderContainer";
import InfiniteScroll from 'react-infinite-scroll-component';
import { DEFAULT_FILTER } from "../../../constants/Constants";
import LoaderCrads from "../../loader/LoaderCrads";
import { getCourses } from "../../../api/coursesApi";
import { IBook, IQueryFilter, PageableData } from "../librari/LibrariContainer";
import CoursesComponent from "../../../components/CoursesComponent/CoursesComponent";
import { getCategories } from "../../../api/categoriesApi";
import CategoriesComponent from "../../../components/categoriesComponent/CategoriesComponent";

export interface ICategorie {
  _id?: string,
  name: string,
  imgUrl: string,
  books: IBook[]
}

export default function CategoriesContainer() {
  const { loader, setLoader } = useContext(AuthContext);
  const filter: IQueryFilter = DEFAULT_FILTER
  const [categories, setCategories] = useState<PageableData<ICategorie>>({
    items: [],
    total: 0,
    limit: filter?.limit
  })

  const getCategoriesFn = async () => {
    try {
      if (loader) return
      setLoader(true)
      const res = await getCategories(filter)
      setCategories({
        ...categories,
        total: res.data?.data?.total,
        items: res.data?.data?.data,
      })
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getCategoriesFn()
  }, [])

  const updateCategories = async (payload: any) => {
    if (
      !categories?.items?.length ||
      loader ||
      (categories.total < payload.offset && payload.offset <= 0)
    )
      return
    try {
      console.log('update log ->', payload, loader, categories)

      const response: any = await getBooks(payload)
      const items = [
        ...categories.items,
        ...((response.data?.data?.data as ICategorie[]) || []),
      ]

      setCategories({ ...categories, items: items })
    } catch (error) {
      console.error('books items is error ', error)
    } finally {
      setLoader(false)
    }
  }

  console.log('setCategories ', categories)
  return (
    <>
      {loader && <LoaderContainer />}
      <InfiniteScroll
        dataLength={categories.items?.length}
        next={() => updateCategories({ ...filter, offset: categories?.items?.length })}
        scrollableTarget="scrollableDiv"
        hasMore={
          categories.total > categories?.items?.length &&
          categories?.items?.length >= categories?.limit
        }
        loader={<LoaderCrads />}

      >
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-screen content-start ">
          {categories.total != 0 && categories.items.map((categorie: ICategorie) => (
            <Link to={`/categories/${categorie?._id}`} key={categorie?._id}>
              <CategoriesComponent categorie={categorie} />
            </Link>
          ))}

        </div>

      </InfiniteScroll>

    </>
  )
}