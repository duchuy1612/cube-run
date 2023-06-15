import React, { useState } from 'react'
import Form from '../Form/Form'
import BlueButton from '../Button/BlueButton'
import RedButton from '../Button/RedButton'
import { Icon } from '@iconify/react'
import axios from 'axios'

export default function ModalCreate(props: {
  displayModal: boolean
  setDisplayModal: any
  id: any
}) {
  const [click, setClick] = React.useState(false)
  const [event, setEvent] = React.useState("")

  React.useEffect(() => {
    const updateStatus = async (id) => {
      const data = JSON.stringify({
        status: status,
      });
      const config = {
        method: "patch",
        url: `http://localhost:3000/updateStatus/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios(config);
      //  setResult(respone["result"])
      console.log(response);
    };
    if (click === true) {
      updateStatus(props.id);
      setClick(false);
    }
  }, [click, props.id]);

  return (
    <Form
      displayModal={props.displayModal}
      setDisplayModal={props.setDisplayModal}
    >
      <div className="window grow p-4 ">
        <div className='flex flex-col gap-3 items-start justify-between'>
          <Icon className='text-xl' icon="carbon:warning-filled"></Icon>
          <div className='text-lg'>Do you want to delete the Event with the ID: {event}</div>
        </div>
        <div className="Row">
          <RedButton
            onClick={() => {
              props.setDisplayModal(false)
            }}
          >
            Close
          </RedButton>
          <BlueButton
            onClick={() => {
              props.setDisplayModal(false)
              setClick(true)
            }}
          >
            Confirm
          </BlueButton>
        </div>
      </div>
    </Form>
  )
}