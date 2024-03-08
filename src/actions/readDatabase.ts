'use server'

import { databaseClient } from "@/lib/firebase-config"

export const readDatabase = async () => {
  const data = await databaseClient.collection('users').doc('duw4ng@gmail.com')
  const doc =  await data.get()

  console.log(doc.data())
}