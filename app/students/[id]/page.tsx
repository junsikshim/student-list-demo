import Image from 'next/image'
import Link from 'next/link'

import { studentList } from '../../data'

export default function StudentDetail({ params }: { params: { id: number } }) {
  const id = +params.id
  const student = studentList.filter(student => student.id === id)[0]

  console.log('student', student)

  return (
    <main>
      <div className="mb-3">
        <Link href="/">&lt; 뒤로가기</Link>
      </div>


      <h1>Student {id} Detail</h1>

      <dl className="grid grid-cols-[15%_85%] mt-5">
        <dt>이름</dt>
        <dd>{student.name}</dd>

        <dt>나이</dt>
        <dd>{student.age}</dd>

        <dt>이미지</dt>
        <dd>
          <Image
            src={student.image}
            alt='image'
            width="200"
            height="200" />
        </dd>
      </dl>
    </main>
  )
}