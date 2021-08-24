// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../axios';
// import { useHistory, useParams } from 'react-router-dom';
// //MaterialUI
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles((theme) => ({
// 	paper: {
// 		marginTop: theme.spacing(8),
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 	},
// 	form: {
// 		width: '100%', // Fix IE 11 issue.
// 		marginTop: theme.spacing(3),
// 	},
// 	submit: {
// 		margin: theme.spacing(3, 0, 2),
// 	},
// }));

// export default function Create() {
// 	const history = useHistory();
// 	const { id } = useParams();
// 	const initialFormData = Object.freeze({
// 		id: '',
// 		title: '',
// 		slug: '',
// 		excerpt: '',
// 		content: '',
// 	});

// 	const [formData, updateFormData] = useState(initialFormData);

// 	useEffect(() => {
// 		axiosInstance.get('admin/edit/postdetail/' + id).then((res) => {
// 			updateFormData({
// 				...formData,
// 				['title']: res.data.title,
// 				['excerpt']: res.data.excerpt,
// 				['slug']: res.data.slug,
// 				['content']: res.data.content,
// 			});
// 			console.log(res.data);
// 		});
// 	}, [updateFormData]);

// 	const handleChange = (e) => {
// 		updateFormData({
// 			...formData,
// 			// Trimming any whitespace
// 			[e.target.name]: e.target.value.trim(),
// 		});
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(formData);

// 		axiosInstance.put(`admin/edit/` + id + '/', {
// 			title: formData.title,
// 			slug: formData.slug,
// 			author: 1,
// 			excerpt: formData.excerpt,
// 			content: formData.content,
// 		});
// 		history.push({
// 			pathname: '/admin/',
// 		});
// 		window.location.reload();
// 	};

// 	const classes = useStyles();

// 	return (
// 		<Container component="main" maxWidth="sm">
// 			<CssBaseline />
// 			<div className={classes.paper}>
// 				<Typography component="h1" variant="h5">
// 					Edit Post
// 				</Typography>
// 				<form className={classes.form} noValidate>
// 					<Grid container spacing={2}>
// 						<Grid item xs={12}>
// 							<TextField
// 								variant="outlined"
// 								required
// 								fullWidth
// 								id="title"
// 								label="Post Title"
// 								name="title"
// 								autoComplete="title"
// 								value={formData.title}
// 								onChange={handleChange}
// 							/>
// 						</Grid>
// 						<Grid item xs={12}>
// 							<TextField
// 								variant="outlined"
// 								required
// 								fullWidth
// 								id="excerpt"
// 								label="Post Excerpt"
// 								name="excerpt"
// 								autoComplete="excerpt"
// 								value={formData.excerpt}
// 								onChange={handleChange}
// 								multiline
// 								rows={8}
// 							/>
// 						</Grid>
// 						<Grid item xs={12}>
// 							<TextField
// 								variant="outlined"
// 								required
// 								fullWidth
// 								id="slug"
// 								label="slug"
// 								name="slug"
// 								autoComplete="slug"
// 								value={formData.slug}
// 								onChange={handleChange}
// 							/>
// 						</Grid>
// 						<Grid item xs={12}>
// 							<TextField
// 								variant="outlined"
// 								required
// 								fullWidth
// 								id="content"
// 								label="content"
// 								name="content"
// 								autoComplete="content"
// 								value={formData.content}
// 								onChange={handleChange}
// 								multiline
// 								rows={8}
// 							/>
// 						</Grid>
// 					</Grid>
// 					<Button
// 						type="submit"
// 						fullWidth
// 						variant="contained"
// 						color="primary"
// 						className={classes.submit}
// 						onClick={handleSubmit}
// 					>
// 						Update Post
// 					</Button>
// 				</form>
// 			</div>
// 		</Container>
// 	);
// }
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory, useParams } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {
	const history = useHistory();
	const { id } = useParams();
	const initialFormData = Object.freeze({
		id: '',
		title: '',
		slug: '',
		excerpt: '',
		content: '',
		rem:'',
		oxy:'',
		t_oxy_bed:'',
		a_oxy_bed:'',
		t_icu_bed:'',
		a_icu_bed:'',
		email:'',
		phone:'',
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get('admin/edit/postdetail/' + id).then((res) => {
			updateFormData({
				...formData,
				['title']: res.data.title,
				['excerpt']: res.data.excerpt,
				['slug']: res.data.slug,
				['content']: res.data.content,
				['rem']:res.data.rem,
				['oxy']:res.data.oxy,
				['t_oxy_bed']:res.data.t_oxy_bed,
				['a_oxy_bed']:res.data.a_oxy_bed,
				['t_icu_bed']:res.data.t_icu_bed,
				['a_icu_bed']:res.data.a_icu_bed,
				['email']:res.data.email,
				['phone']:res.data.phone,
		

			});
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance.put(`admin/edit/` + id + '/', {
			title: formData.title,
			slug: formData.slug,
			//author should be formdata.author
			author: formData.author,
			excerpt: formData.excerpt,
			content: formData.content,
			rem: formData.rem,
			oxy: formData.oxy,
			t_oxy_bed:formData.t_oxy_bed,
			a_oxy_bed: formData.a_oxy_bed,
			t_icu_bed:formData.t_icu_bed,
			a_icu_bed: formData.a_icu_bed,
			email : formData.email,
			phone: formData.phone,
		});
		history.push({
			pathname: '/admin/',
		});
		window.location.reload();
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Edit Post
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Post Title"
								name="title"
								autoComplete="title"
								value={formData.title}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="excerpt"
								label="Post Excerpt"
								name="excerpt"
								autoComplete="excerpt"
								value={formData.excerpt}
								onChange={handleChange}
								multiline
								rows={8}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="slug"
								label="slug"
								name="slug"
								autoComplete="slug"
								value={formData.slug}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="content"
								label="content"
								name="content"
								autoComplete="content"
								value={formData.content}
								onChange={handleChange}
								multiline
								rows={8}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="rem"
								label="rem"
								name="rem"
								autoComplete="rem"
								value={formData.rem}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="oxy"
								label="oxy"
								name="oxy"
								autoComplete="oxy"
								value={formData.oxy}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="t_oxy_bed"
								label="t_oxy_bed"
								name="t_oxy_bed"
								autoComplete="t_oxy_bed"
								value={formData.t_oxy_bed}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="a_oxy_bed"
								label="a_oxy_bed"
								name="a_oxy_bed"
								autoComplete="a_oxy_bed"
								value={formData.a_oxy_bed}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="t_icu_bed"
								label="t_icu_bed"
								name="t_icu_bed"
								autoComplete="t_icu_bed"
								value={formData.t_icu_bed}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="a_icu_bed"
								label="a_icu_bed"
								name="a_icu_bed"
								autoComplete="a_icu_bed"
								value={formData.a_icu_bed}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="phone"
								label="phone"
								name="phone"
								autoComplete="phone"
								value={formData.phone}
								onChange={handleChange}
								
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="email"
								name="email"
								autoComplete="email"
								value={formData.email}
								onChange={handleChange}
								
							/>
						</Grid>






					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Update Post
					</Button>
				</form>
			</div>
		</Container>
	);
}