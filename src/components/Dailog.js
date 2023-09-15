import React from "react";


function Dialog(props, ref) {

    return (
        <dialog ref={ref} className={`${props.className ? props.className : ""} my-auto bg-transparent text-text `}>
            <div className="w-3/5 m-auto bg-primary rounded-2xl">
                <div className="flex items-start justify-between p-4 border-b rounded-t">
                    <div className="flex px-2 py-1">
                        <div>
                            {props.pic ? <img src={props.pic} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user" /> : ""}
                        </div>
                        <div className="flex flex-col justify-center">
                            {props.name ? <h6 className="mb-0 text-sm leading-normal font-main">{props.name}</h6> : ""}
                            {props.email ? <p className="mb-0 text-xs leading-tight text-slate-400 font-main" >{props.email}</p> : ""}
                        </div>
                    </div>
                    <button onClick={() => ref.current.close()}
                        className="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" >
                        X
                    </button>
                </div>
                <div className="flex flex-col p-6">
                    {props.children}
                </div>
                <div className="flex items-center justify-end gap-4 p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                    {props.onSubmit ?
                        <button
                            onClick={() => props.onSubmit()}
                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            {props.submitText ? props.submitText : "Submit"}
                        </button> : ""
                    }
                    <button
                        onClick={() => ref.current.close()}
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        {props.cancelText ? props.cancelText : "Cancel"}
                    </button>
                </div>
            </div>
        </dialog>
    )
}

export default React.forwardRef(Dialog);