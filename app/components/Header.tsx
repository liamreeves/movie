

import { auth, signOut } from '../../auth'; // correct path to your auth config
import React from "react"
export const Header = async () => {

	function SignOut() {
		return (
		  <form
			action={async () => {
			  'use server';
			  await signOut();
			}}
		  >
			<button type="submit">Sign out</button>
		  </form>
		);
	  }
    const session: any = await auth();
     return (
	<header>
		{session ?
		(<div><p>Welcome {session?.user.name}</p>
		
		<SignOut/></div>)
		:
		<a  href="http://localhost:3000/api/auth/signin">Sign in</a>}
	     
	</header>
)
	 }