import yayJpg from '../assets/yay.jpg';
import React, {useState} from 'react';
import type {FC} from 'react';
import {ImageUploader, Space, Toast, Dialog, TextArea} from 'antd-mobile';
import {ImageUploadItem} from 'antd-mobile/es/components/image-uploader';

const demoSrc =
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60';

export default function HomePage() {
    const [fileList, setFileList] = useState<ImageUploadItem[]>([
        {
            url: demoSrc
        },
        {
            url: demoSrc
        },
        {
            url: demoSrc
        }
    ]);

    const upload = (file: File) => {
        console.log('upload', file);
    };
    return (
        <div>
            <ImageUploader
                value={fileList}
                onChange={setFileList}
                upload={upload}
            />
            <div style={{background: '#f5f5f5', marginTop: '10px', padding: 5}}>
                <TextArea autoSize placeholder="请输入内容" showCount />
            </div>
        </div>
    );
}
