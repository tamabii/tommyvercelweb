'use server'

import { databaseClient } from "@/lib/firebase-config"
import { ActionResponse } from "@/lib/types"
import { FirebaseError, auth } from "firebase-admin"
import { UserRecord } from "firebase-admin/auth"
import { redirect } from "next/navigation"

export const registerUser = async (formData: FormData) => {
  const response: ActionResponse = { error: null, message: null }
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  //Check if User Exist
  const userRef = databaseClient.collection('users').doc(email)
  const user = await userRef.get()

  if (user.exists) {
    response.error = 'Email sudah terdaftar.'
    return response
  } else {
    const status = await auth().createUser({
      email: email,
      emailVerified: false,
      password: password,
      displayName: email,
    })
    .then((userRecord: UserRecord) => {
      userRef.set({
        email,
        uid: userRecord.uid,
      })
      response.message = `Akun ${email} berhasil dibuat.`
      return response
    })
    .catch((error: FirebaseError) => {
      console.log("Error creating new user:", error.message);
      response.error =  error.message
      return response
    })

    if (status && !status.error) {
      redirect('/')
    }
    return status
  }
}