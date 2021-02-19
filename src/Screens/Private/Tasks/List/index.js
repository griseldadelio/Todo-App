import React, { useState, useEffect } from "react";
import { api } from "../../../../utils";
import { useTranslation } from "react-i18next";
import { Layout, Main } from "../../../../components";
import { objectToArray } from "../../../../helpers";
import { CardTask } from "./components";
import './task.css'


const List = () => {
    const [t] = useTranslation("global");
    const [tasks, setTask] = useState([]);

    const getApi = () => {
        api
            .get("/tareas.json")
            .then((response) => {
                const data = objectToArray(response.data);
                setTask(data);
                console.log(data)

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getApi();
    }, []);

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const drop = (e) => {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    }

    const drag = (e) => {
        e.dataTransfer.setData("text", e.target.id);
    }

    return (
        <Layout>
            <Main showButton={true} title={t("main.titleTask")} txt={t("main.btntask")} link={('/addTask')} className={"bg-light main"} >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div id="div1" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
                    <div id="div2" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
                    <div id="div3" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
                    <div id="div4" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
                    <div id="div5" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
                    {tasks.map(({ title, date, assigned, description, status, id }) => {
                        return (
                            <div id={`drag${id}`} draggable="true" onDragStart={e => drag(e)}>
                                <CardTask className="m-3" style={{ width: "18rem", border: "1px solid" }}
                                    title={title}
                                    description={description}
                                    assigned={assigned}
                                    date={date}
                                    status={status}
                                    id={id}
                                />
                            </div>
                        );
                    })}
                </div>
            </Main>
        </Layout >
    );
};

export { List };