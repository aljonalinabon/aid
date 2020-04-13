const express = require('express');
const router = express.Router();
const applications = require('../../Applications');
const uuid = require('uuid');

router.get('/:id', (req, res) => {
  const found =  applications.some(application => application.id === parseInt(req.params.id));
  if (found) { 
    res.json(applications.filter(application => application.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `No application with ID ${req.params.id}.`});
  }
})

router.get('/', (req, res) => res.json(applications)); 

router.post('/', (req, res) => {
  console.log(req.body);
  // const references = [...req.body.references];

  const newApplication = {
    id: uuid.v4(),
    name: req.body.name,
    project_name: req.body.project_name,
    project_type: req.body.project_type,
    version: req.body.version,
    description: req.body.description,
    sales_company: req.body.sales_company,
    customer_name: req.body.customer_name,
    dev_status: req.body.dev_status,
    dev_remarks: req.body.dev_remarks
  }

  if(!newApplication.name) {
    return res.status(400).json({msg: 'Please include name'});
  }

  applications.push(newApplication);
  res.json(applications);
});

router.put('/:id', (req, res) => {
  const found =  applications.some(application => application.id === parseInt(req.params.id));
  if (found) { 
    const updateApplication = req.body;
    applications.forEach(application => {
      if(application.id === parseInt(req.params.id)) {
        application.name= updateApplication.name ? updateApplication.name : application.name;
        res.json({ msg: 'Successfully updated', application});
      }
    });
  } else {
    res.status(400).json({msg: `No application with ID ${req.params.id}.`});
  }
})
router.delete('/:id', (req, res) => {
  const found =  applications.some(application => application.id === parseInt(req.params.id));
  if (found) { 
    res.json({
      msg: 'Application deleted',
      applications: applications.filter(application => application.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({msg: `No application with ID ${req.params.id}.`});
  }
})


module.exports = router;