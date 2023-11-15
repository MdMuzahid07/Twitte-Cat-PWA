import React from 'react'

const MeowITModal = () => {
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id="meowit-modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-xs md:btn-md rounded-full bg-blue-500 px-4 text-white">Post</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default MeowITModal