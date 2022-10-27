import Layout from "../component/layout/Layout"
import Section from "../component/section/Section"

const experience = [
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequatur.`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequatur.`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequatur.`
]

const education = [
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequatur.`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequatur.`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequatur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequaturLorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem, tempore mollitia, excepturi distinctio iure laboriosam obcaecati est voluptate fugit quibusdam delectus quaerat quidem asperiores voluptatibus voluptatem cumque similique a ducimus nobis consequatur`
]


function Home() {
    return (
        <Layout>
            <h1> Hellow! I am a Home Pages!</h1>
            
         <Section title='Experience' items={experience}/>
         <Section title='Education' items={education}/>
        </Layout> 
    )
    
}

export default Home 
