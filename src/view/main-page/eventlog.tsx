import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createEventLog } from '../../graphql/mutations'
import { eventLogByUnitAndTimeStamp, listEventLogs } from '../../graphql/queries'
import awsExports from "../../aws-exports";
import internal from 'stream';
Amplify.configure(awsExports);

interface anyItem {
    [propName: string]: any;
}

const initialState: anyItem = []
// DESC
export function EventLog() {
    const [eventLog, seteventLog] = useState(initialState)
    const [changeList, setchangeList] = useState(true);
    useEffect(() => {
        if (changeList) {
            console.log("Effect", changeList)
            fetchEventLog("ASC")

        }
        if (!changeList) {
            console.log("Effect", changeList)
            fetchEventLog("DESC")
        }
    }, [changeList])


    async function fetchEventLog(a: string) {
        try {
            const eventData: anyItem = await API.graphql(graphqlOperation(eventLogByUnitAndTimeStamp, { unit: "Hachiryu 15", sortDirection: a }))
            console.log(eventData.data.eventLogByUnitAndTimeStamp.items)
            const eventLogs: anyItem = eventData.data.eventLogByUnitAndTimeStamp.items
            seteventLog(eventLogs)
        } catch (err) { console.log('error fetching ') }
    }

    return (
        <div>eventlog
            <button onClick={() => {
                setchangeList(!changeList)
                console.log(changeList)
            }}>change</button>
            <ul>
                {eventLog.map((item: anyItem) => (<li key={item.id}> {item.unit + " |登録順:  " + item.statusCode + "|timeStamp: " + item.timeStamp + "|createOn:" + item.createdOn}</li>))}
            </ul>




        </div>
    )
}
