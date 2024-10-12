---
title: Send Viber message
sidebar_label: Send Viber
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of request to send Viber message with text to the specified number.

`URI: /api/http.php`

Interaction with API is carried out via **HTTP** or **HTTPS** (recommended), parameters are transmitted by <a class="red-text">**GET**</a> or <a class="green-text">**POST**</a> method.

<div class="post-wrap">
    <div class="post-item">
        <div class="item-content">
            <div class="request-parameters">
            ## URI parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**version**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Protocol version: `http`, `https`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**login**</a>
                            <a class="type">string</a>
                            <a class="required">required*</a> <br/>
                            <a class="description">Your personal cabinet login, specified during [registration](../../general/registration.md)
                                <br/> *<sup>\*</sup>Required if authorization is performed using login and password*</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**pass**</a>
                            <a class="type">string</a>
                            <a class="required">required*</a> <br/>
                            <a class="description">Your personal cabinet password specified during [registration](../../general/registration.md)
                                <br/> *<sup>\*</sup>Required if authorization is performed using login and password*</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**key**</a>
                            <a class="type">string</a>
                            <a class="required">required*</a> <br/>
                            <a class="description">Your API key, which can be obtained in your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key)
                                <br/> *<sup>\*</sup> Required if authorization is performed using API key*</a>
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
                            <a class="name">**from**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">The name (phone number) of the sender <br/> Latin characters or numbers up to 11 characters, dot, dash, underscore </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**to**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Recipient's phone number in international format format</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**message**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Message text in UTF8 encoding</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**viber**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Fixed value - `1` or `true`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**viber_type**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Message type: `text`, `image`, `button`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**viber_message**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">UTF8 encoded message text for Viber<br/> Up to 1000 symbols</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**viber_from**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Sender's name for Viber</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**viber_lifetime**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Viber message lifetime in seconds <br/> From 60 to 86400</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**viber_sms**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Value = `1` if it is necessary to redirect the message via SMS in case of impossibility to deliver via Viber</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**viber_image**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Link to image <br/> Supported extensions: `.jpg`, `.jpeg`, `.png`, `.gif`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**viber_url**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Resource link to go to by clicking on the image or button</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**viber_button**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Button caption <br/> 1 to 19 characters</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**wap**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Link to the site. To send Wap-Push messages</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**flash**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Send a message as a Flash message</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**ask_date**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Date and time the message was sent in ISO-8601 format: 2024-08-15T15:52:01+0200</a>
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
                /api/http.php?version=http&key=api/key&command=send&from=test&to=3805012
                34567&message=test&viber=1&viber_type=text&viber_message=test&viber_from
                =test&viber_lifetime=60&viber_sms=true
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
                            <a class="name">**id**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">SMS identifier generated by the gateway</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**smd_count**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Amount of messages sent</a>
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
                    { label: 'Wrong login/password', value: 'wronglogin' },
                    { label: 'Unknown command', value: 'command' }
                ]}
                >
                <TabItem value="successful">
                ```
                id:84523377 sms_count:1
                ```
                </TabItem>
                <TabItem value="wronglogin">
                ```
                errors:Wrong login/password
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