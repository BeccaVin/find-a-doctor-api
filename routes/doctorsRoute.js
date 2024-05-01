const knex = require("knex")(require("../knexfile"));

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const data = await knex("doctors");
        const doctorsList = data.map((doctor) => ({
            id: doctor.id,
            name: doctor.name,
            cpso_number: doctor.cpso_number,
            specialty: doctor.specialty,
            practice_name: doctor.practice_name,
            address: doctor.address,
            city: doctor.city,
            province: doctor.province,
            postal_code: doctor.postal_code,
            phone_number: doctor.phone_number,
            status: doctor.status,
        }));
        res.status(200).json(doctorsList);
    } catch (error) {
        res.status(400).send(`Error retrieving Doctors: ${error}`)
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const doctorData = await knex("doctors")
        .select(
            "id",
            "name",
            "cpso_number",
            "specialty",
            "practice_name",
            "address",
            "city",
            "province",
            "postal_code",
            "phone_number",
            "phone_number",
            "status",
        )
        .where({ id })
        .first();

        res.status(200).json(doctorData);
    } catch (err) {
        res.status(404).send("Doctor information not found" + err);
    }
});

module.exports = router;