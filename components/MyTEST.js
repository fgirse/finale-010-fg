import React, { useEffect, PureComponent } from "react"
import ReactDOM from "react-dom"
import Iframe from "./iframe.js"

const MyTEST=() => {

		return (
			<>
			
			if (typeof window !== "undefined")
			<p className="text-center headingF  text-3xl">History Timeline</p>
			{
				<iframe className="mx-auto"  src="../html8/index.html" width="75%" height="630"></iframe>
			}
			else
			<p className="text-center text-[8rem] text-red-500">TEST!!!</p>
			
			</>
			
			
		)
	}
	export default MyTEST
