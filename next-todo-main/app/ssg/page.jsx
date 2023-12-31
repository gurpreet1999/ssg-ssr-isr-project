import { getAllTodos } from '@/lib/mongo/todos'
import Link from 'next/link'
import NewTodoForm from '../components/NewTodoForm'

// export const dynamic = 'auto'
// export const dynamic = 'force-static'
export const dynamic = 'error'

const Page = async () => {
  const { todos } = await getAllTodos()

  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-3xl font-bold mb-10 bg-emerald-100 w-fit px-2 text-emerald-800'>
          SSG — Static
        </h1>

        <NewTodoForm />

        <h2 className='text-xl font-semibold mt-10 border-b pb-2'>Todos</h2>
        <ul className='mt-4 flex flex-col gap-1'>
          {todos?.map(todo => (
            <li key={todo._id}>
              <Link href={`/ssg/${todo._id}`}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
