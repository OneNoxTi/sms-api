---
title: Deleting an SMS message from the queue
sidebar_label: Deleting a message
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of a request to delete an SMS message from the queue.<br/>
SMS messages are deleted from the queue only if the message has been [scheduled](scheduled_sms.md) (the date and time of sending the SMS message is specified).

`URI: /api/http.php`

All requests to the gateway API are sent in **JSON** using the <a class="red-text">**GET**</a> or <a class="green-text">**POST**</a> method.

<div class="post-wrap">
    <div class="post-item">
        <div class="item-content">
            <div class="request-parameters">
            ## URI parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**key**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Your API key, which can be obtained in your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key)</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**command**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Request type: `send`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**id**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Message identifier received upon successful execution of the send request </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="request-example">
                ## Request example
                ```
                /api/http.php?key=api/key&command=delete&id=test
                ```
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="response-parameters">
            ## Response parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**status**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Current message status: <br/>
                            `0 - Pending` <br/>
                            `1 - Sending` <br/>
                            `2 - Sent` <br/>
                            `3 - Delivered` <br/>
                            `5 - Out of touch` <br/>
                            `10 - Deleted` <br/>
                            `50 - Partially delivered` <br/>
                            `96 - Network failure during SMS delivery` <br/>
                            `99 - Error in the number` <br/>
                            `99 - Number not in service` <br/>
                            `116 - Read (Viber only)`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**code**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Message code</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**errors**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Error message</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="response-example">
                ## Response examples
                <Tabs
                groupId="response-examples"
                defaultValue="successful"
                values={[
                    { label: 'Successful', value: 'successful', },
                    { label: 'Unknown command', value: 'command' }
                ]}
                >
                <TabItem value="successful">
                ```
                status:Deleted code:10
                ```
                </TabItem>
                <TabItem value="command">
                ```
                errors:Unknown command
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</div>