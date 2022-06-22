import React, { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getBookitem } from "../../../api/librariApi";
import Button from "../../../components/form-elements/Button";
import { AuthContext } from "../../../providers/AuthProvider";
import LoaderContainer from "../../loader/LoaderContainer";
import { IBook } from "./LibrariContainer";


export default function LibrariViewContainer() {
  const { isLoggedIn, loader, setLoader } = useContext(AuthContext);
  const [bookItem, setBookItem] = useState({} as IBook)
  const { id } = useParams()
  const navigate = useNavigate();

  const getLibrariItem = async () => {
    try {
      if (loader) return
      setLoader(true)
      const res = await getBookitem(id!)
      setBookItem(res?.data?.data)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    if (id) {
      getLibrariItem()
    }
  }, [])

  console.log('librariItem', bookItem)


  return (
    <React.Fragment>
      {loader && <LoaderContainer />}

      {Object.keys(bookItem).length !== 0 && (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col bg-white rounded w-full lg:w-2/2 xl:w-1/3 p-6 divide-y h-fit">
            <div className="flex justify-center mb-6">
              <img className="w-full rounded " src={bookItem?.imgUrl !== 'img/img-a463268af6f271bc3adac0871d505b4a.jpg' ? bookItem?.imgUrl : 'https://charlottesometimesgoestothemovies.files.wordpress.com/2020/03/books.jpg'} />
            </div>
            <div className="flex flex-row py-3 border-none">
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>
                  Name:
                </span>
              </p>
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{bookItem?.name}</p>
            </div>
            <div className="flex flex-row py-3">
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>
                  Language:
                </span>
              </p>
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">Uzbek</p>
            </div>
            <div className="flex flex-row py-3">
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>
                  Letters:
                </span>
              </p>
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">Latin</p>
            </div>
            <div className="flex flex-row py-3">
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span>
                  Page:
                </span>
              </p>
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">365</p>
            </div>

            {bookItem?.author && (

              <div className="flex flex-row py-3">
                <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>
                    Author:
                  </span>
                </p>
                <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{bookItem?.author?.fullName}</p>
              </div>
            )}
            <div className="flex flex-col py-3 items-start">
              <p className="text-sm font-medium w-full text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <span >
                  Description:
                </span>
              </p>
              <p className="text-sm font-medium mt-4 w-full text-gray-900 first-letter:uppercase whitespace-normal overflow-hidden">{bookItem?.description}</p>
            </div>

            <div>
              <Button className={'mt-6'}
                onClick={() => {
                  if (isLoggedIn) {
                    toast.success('Now you can read this book any time :)');
                    // navigate(bookItem?.ebookUrl!)
                  } else {
                    toast.error('Please register first');
                    navigate('/register')
                  }
                }}
                icon={<span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </span>}
              >
                READ EBOOK
              </Button>
            </div>

          </div>

          <div className="flex flex-col bg-white rounded w-full lg:w-2/2 xl:w-2/3 p-6">
            <h2 className="text-2xl font-medium mb-4">
              {bookItem?.name}
            </h2>

            <div className="border-b opacity-50 w-full mb-6"></div>

            <p className="mb-6 text-base font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ullam debitis labore, repellat modi esse mollitia quos nesciunt ratione incidunt pariatur quod amet quibusdam assumenda earum vero quidem omnis fugiat vel laudantium! Ratione, cumque reprehenderit autem alias asperiores sapiente at sed! Molestias minus mollitia fugit qui tempora dolore quae voluptate?
            </p>

            <p className="mb-6 text-base font-medium text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, sint soluta! Aliquam, iure dicta iusto modi ratione laudantium eaque maiores magnam reiciendis incidunt nesciunt molestiae quaerat dolorum nam perferendis sapiente recusandae odit, assumenda qui, dolor illo rerum ullam fuga harum. Eum totam similique sint repudiandae quae cum earum distinctio voluptates, corporis facilis. Error deserunt laudantium amet nemo in consequatur voluptate, neque autem fuga cumque, illum atque inventore ducimus qui, fugiat ratione. Ab sit, rerum iusto in voluptatibus omnis sequi autem delectus reprehenderit praesentium, magni ipsa quas dicta accusantium accusamus consequatur facere similique quam quis hic temporibus unde. Iste, autem sint?
            </p>

            <p className="mb-6 text-base font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatibus? Maiores nemo consequuntur ex adipisci eaque facere, reiciendis possimus accusantium expedita dolor quidem.
            </p>

            <p className="mb-6 text-base font-medium text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ex earum doloremque excepturi exercitationem. Pariatur explicabo laborum voluptatum laboriosam modi cumque, illum dignissimos non quisquam hic inventore est dolores ipsa omnis quam neque, eligendi nihil labore veniam suscipit, accusamus eveniet repellat. Qui nesciunt suscipit fuga repudiandae sunt exercitationem fugiat mollitia magni, quia at quasi itaque magnam? Neque facere vel officia laudantium aut perferendis, libero rerum nulla corrupti fuga nostrum fugiat, veniam magni dolorem! Amet culpa tempore a ratione, obcaecati ad at laudantium nulla quis voluptatem, sed similique ab dolores neque natus. Totam ipsam sed corporis, quas quia debitis similique at, dicta quo facilis in perspiciatis aperiam soluta quae autem eveniet fugiat accusamus modi? Harum mollitia dicta aut incidunt quibusdam repudiandae illo, fugiat excepturi esse odio similique? Recusandae nemo dolorum a? Autem, magnam aperiam consequatur qui at voluptas voluptates assumenda modi nihil quaerat nisi vel tenetur ducimus dicta obcaecati quos itaque dolorum? Labore iste, praesentium autem esse vel amet, harum accusamus debitis quae cum exercitationem. Quisquam voluptatum iure id exercitationem, sint dolor, deserunt quod ipsam commodi veritatis ab vitae doloribus expedita minima provident nesciunt quam soluta nihil qui! Cum eos vero ad doloribus magnam ipsa distinctio quibusdam incidunt, nemo debitis sunt!
            </p>

            <p className="mb-6 text-base font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ullam debitis labore, repellat modi esse mollitia quos nesciunt ratione incidunt pariatur quod amet quibusdam assumenda earum vero quidem omnis fugiat vel laudantium! Ratione, cumque reprehenderit autem alias asperiores sapiente at sed! Molestias minus mollitia fugit qui tempora dolore quae voluptate?
            </p>

            <p className="mb-6 text-base font-medium text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, sint soluta! Aliquam, iure dicta iusto modi ratione laudantium eaque maiores magnam reiciendis incidunt nesciunt molestiae quaerat dolorum nam perferendis sapiente recusandae odit, assumenda qui, dolor illo rerum ullam fuga harum. Eum totam similique sint repudiandae quae cum earum distinctio voluptates, corporis facilis. Error deserunt laudantium amet nemo in consequatur voluptate, neque autem fuga cumque, illum atque inventore ducimus qui, fugiat ratione. Ab sit, rerum iusto in voluptatibus omnis sequi autem delectus reprehenderit praesentium, magni ipsa quas dicta accusantium accusamus consequatur facere similique quam quis hic temporibus unde. Iste, autem sint?
            </p>

            <p className="mb-6 text-base font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatibus? Maiores nemo consequuntur ex adipisci eaque facere, reiciendis possimus accusantium expedita dolor quidem.
            </p>

            <p className="mb-6 text-base font-medium text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ex earum doloremque excepturi exercitationem. Pariatur explicabo laborum voluptatum laboriosam modi cumque, illum dignissimos non quisquam hic inventore est dolores ipsa omnis quam neque, eligendi nihil labore veniam suscipit, accusamus eveniet repellat. Qui nesciunt suscipit fuga repudiandae sunt exercitationem fugiat mollitia magni, quia at quasi itaque magnam? Neque facere vel officia laudantium aut perferendis, libero rerum nulla corrupti fuga nostrum fugiat, veniam magni dolorem! Amet culpa tempore a ratione, obcaecati ad at laudantium nulla quis voluptatem, sed similique ab dolores neque natus. Totam ipsam sed corporis, quas quia debitis similique at, dicta quo facilis in perspiciatis aperiam soluta quae autem eveniet fugiat accusamus modi? Harum mollitia dicta aut incidunt quibusdam repudiandae illo, fugiat excepturi esse odio similique? Recusandae nemo dolorum a? Autem, magnam aperiam consequatur qui at voluptas voluptates assumenda modi nihil quaerat nisi vel tenetur ducimus dicta obcaecati quos itaque dolorum? Labore iste, praesentium autem esse vel amet, harum accusamus debitis quae cum exercitationem. Quisquam voluptatum iure id exercitationem, sint dolor, deserunt quod ipsam commodi veritatis ab vitae doloribus expedita minima provident nesciunt quam soluta nihil qui! Cum eos vero ad doloribus magnam ipsa distinctio quibusdam incidunt, nemo debitis sunt!
            </p>
          </div>
        </div>
      )
      }

    </React.Fragment >
  )
}